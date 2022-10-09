export class AssignedTo{
  constructor(
    public person_name?: string,
    public status?: string,
  ) {}
}

export class WorkOrder {
  constructor(
    public work_order_id?: number,
    public description?: string,
    public received_date?: Date,
    public assigned_to?: AssignedTo[],
    public status?: string,
    public priority?: string,
  ) {}
}
