import { ApiController } from "../controllers/ApiController.js";

export class ApiRouter {

    #controller;

    constructor() {
        this.#controller = ApiController.controllers;
    }
}