import { Capsule } from "../domain/Capsule";
import { MySQLRepository } from "./mysql.repository";

export class CapsuleRepository extends MySQLRepository<Capsule> {
  constructor() {
    super('capsules');
  }
}