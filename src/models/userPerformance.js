export class UserPerformance {
  constructor(userPerformance) {
    this.id = userPerformance.userId;
    this.kind = userPerformance.kind;
    this.data = userPerformance.data;
  }
}
