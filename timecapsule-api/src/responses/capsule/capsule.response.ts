import { Capsule } from "../../domain/Capsule";

export const CapsuleResponse = {
  toDto(entity: Capsule) {
    return {
      id: entity.id,
      title: entity.title,
      description: entity.description,
      memory_url: entity.memory_url,
      scheduled_date: entity.scheduled_date.toISOString(),
      created_at: entity.created_at ? entity.created_at.toISOString() : undefined
    }
  },

  toListDto(entities: Capsule[]) {
    return entities.map(this.toDto);
  }
}