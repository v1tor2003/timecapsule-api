import { CapsuleRepository } from "../repositories/capsule.repository";
import { Capsule } from "../domain/Capsule";

const repo = new CapsuleRepository();

export const CapsuleService = {
  create: (data: Capsule) => repo.create(data),
  findById: (id: number) => repo.findById(id),
  findAll: () => repo.findAll(),
  update: (id: number, data: Partial<Capsule>) => repo.update(id, data),
  delete: (id: number) => repo.delete(id)
}