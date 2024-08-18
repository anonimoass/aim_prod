app.post('/auth', (req, res) => {
    const { id, first_name, username } = req.body;

    // Проверьте ID пользователя и определите его роль
    let role;
    if (id === ADMIN_ID) {
        role = 'admin';
    } else if (id === ENGINEER_ID) {
        role = 'engineer';
    } else {
        role = 'user';
    }

    // Отправьте роль обратно на клиент
    res.json({ role });
});
