import express from 'express';
import { server } from './server/Server';

const PORT = 3000;

server.listen(PORT, () => {
    console.log("FUNFOU");
})