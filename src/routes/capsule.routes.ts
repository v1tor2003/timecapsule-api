import { Router } from "express";
import { createCapsuleHandler } from "../endpoints/capsule/createCapsule.endpoint";
import { getCapsuleHandler } from "../endpoints/capsule/getCapsule.endpoint";
import { listCapsulesHandler } from "../endpoints/capsule/listCapsules.endpoint";
import { updateCapsuleHandler } from "../endpoints/capsule/updateCapsule.endpoint";
import { deleteCapsuleHandler } from "../endpoints/capsule/deleteCapsule.endpoint";

export const capsuleRouter = Router();

/**
 * @swagger
 * /api/v1/capsules:
 *   post:
 *     summary: Create a new time capsule
 *     description: Creates a new time capsule with the given data.
 *     tags: [Capsules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCapsuleRequest'
 *     responses:
 *       201:
 *         description: The created time capsule.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CapsuleResponse'
 */
capsuleRouter.post("/", createCapsuleHandler);

/**
 * @swagger
 * /api/v1/capsules/{id}:
 *   get:
 *     summary: Get a time capsule by ID
 *     description: Retrieves a time capsule by its ID.
 *     tags: [Capsules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the time capsule to retrieve.
 *     responses:
 *       200:
 *         description: The time capsule.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CapsuleResponse'
 *       404:
 *        description: Capsule not found
 */
capsuleRouter.get("/:id", getCapsuleHandler);

/**
 * @swagger
 * /api/v1/capsules:
 *   get:
 *     summary: List all time capsules
 *     description: Retrieves a list of all time capsules.
 *     tags: [Capsules]
 *     responses:
 *       200:
 *         description: A list of time capsules.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CapsuleResponse'
 */
capsuleRouter.get("/", listCapsulesHandler);

/**
 * @swagger
 * /api/v1/capsules/{id}:
 *   put:
 *     summary: Update a time capsule
 *     description: Updates a time capsule with the given data.
 *     tags: [Capsules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the time capsule to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateCapsuleRequest'
 *     responses:
 *       200:
 *         description: The updated time capsule.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CapsuleResponse'
 *       404:
 *        description: Capsule not found
 */
capsuleRouter.put("/:id", updateCapsuleHandler);

/**
 * @swagger
 * /api/v1/capsules/{id}:
 *   delete:
 *     summary: Delete a time capsule
 *     description: Deletes a time capsule by its ID.
 *     tags: [Capsules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the time capsule to delete.
 *     responses:
 *       204:
 *         description: The time capsule was deleted successfully.
 *       404:
 *        description: Capsule not found
 */
capsuleRouter.delete("/:id", deleteCapsuleHandler);