package main

import "context"

type Item struct {
	ID        int
	Title     string
	Completed bool
}

type Tasks struct {
	Items          []Item
	Count          int
	CompletedCount int
}

func fetchTasks() ([]Item, error) {
	var items []Item
	rows, err := DB.Query("SELECT id, title, completed FROM tasks ORDER BY position")
	if err != nil {
		return []Item{}, err
	}
	defer rows.Close()

	for rows.Next() {
		item := Item{}
		err := rows.Scan(&item.ID, &item.Title, &item.Completed)
		if err != nil {
			return []Item{}, err
		}
		items = append(items, item)
	}

	return items, nil
}

func fetchTask(ID int) (Item, error) {
	var item Item
	err := DB.QueryRow("SELECT id, title, completed FROM tasks WHERE id = ?", ID).Scan(&item.ID, &item.Title, &item.Completed)

	if err != nil {
		return Item{}, err
	}

	return item, nil
}

func updateTask(ID int, title string) (Item, error) {
	var item Item
	err := DB.QueryRow("UPDATE tasks SET title = ? WHERE id = ? RETURNING id, title, completed", title, ID).Scan(&item.ID, &item.Title, &item.Completed)

	if err != nil {
		return Item{}, err
	}

	return item, nil
}

func fetchCount() (int, error) {
	var count int
	err := DB.QueryRow("SELECT COUNT(*) FROM tasks").Scan(&count)

	if err != nil {
		return 0, err
	}

	return count, nil
}

func insertTask(title string) (Item, error) {
	count, err := fetchCount()
	if err != nil {
		return Item{}, err
	}

	var id int
	err = DB.QueryRow("INSERT INTO tasks (title, position) VALUES (?, ?) RETURNING id", title, count).Scan(&id)

	if err != nil {
		return Item{}, err
	}

	item := Item{ID: id, Title: title, Completed: false}
	return item, nil
}

func deleteTask(ctx context.Context, ID int) error {
	_, err := DB.Exec("DELETE FROM tasks WHERE id = ?", ID)
	if err != nil {
		return err
	}

	rows, err := DB.Query("SELECT id ORDER BY position")
	if err != nil {
		return err
	}

	var ids []int
	for rows.Next() {
		var id int
		err := rows.Scan(&id)
		if err != nil {
			return err
		}
		ids = append(ids, id)
	}

	tx, err := DB.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()
	for idx, id := range ids {
		_, err := DB.Exec("UPDATE tasks SET position = ? WHERE id = ?", idx, id)
		if err != nil {
			return err
		}
	}

	err = tx.Commit()
	if err != nil {
		return err
	}

	return nil
}

func orderTasks(ctx context.Context, values []int) error {
	tx, err := DB.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()
	for idx, id := range values {
		_, err := DB.Exec("UPDATE tasks SET position = ? WHERE id = ?", idx, id)
		if err != nil {
			return err
		}
	}

	if err := tx.Commit(); err != nil {
		return err
	}

	return nil
}
