import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ saludo: 'cómo le va? Desde el Get' })
})
app.post('/', (req, res) => {
    res.json({ saludo: 'cómo le va? Desde el Post' })
})
app.put('/', (req, res) => {
    res.json({ saludo: 'cómo le va? Desde el Put' })
})
app.delete('/', (req, res) => {
    res.json({ saludo: 'cómo le va? Desde el Delete' })
})
app.patch('/', (req, res) => {
    res.json({ saludo: 'cómo le va? Desde el Patch' })
})
app.options('/', (req, res) => {
    res.json({ saludo: 'cómo le va? Desde el Options' })
})
app.purge('/', (req, res) => {
    res.json({ saludo: 'cómo le va? Desde el Purge' })
})

const PORT = 8080;

const server = app.listen(PORT, () =>
    console.log(`Server listening at ${server.address().port}
    - http://localhost:${PORT}`));