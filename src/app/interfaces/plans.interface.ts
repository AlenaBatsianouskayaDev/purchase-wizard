export interface IPlan {
  id: string,
  name: string,
  description: string[],
  currency: string,
  price: number
}

export interface IPlans {
  personalPlans: IPlan[],
  enterprisePlans: IPlan[],
}
