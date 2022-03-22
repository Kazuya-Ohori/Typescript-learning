// Abstract Class
abstract class Department {
  static fiscalYear = "2020";
  // private readonly id: string;
  // name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(this.fiscalYear); // これはstaticなのでアクセスできない
    console.log(Department.fiscalYear); // こうする事で使用できる。
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = "d2"; //　idはreadonlyなのでエラーになる。
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT部門 - ID: " + this.id);
  }
}

// Singleton pattern
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが存在しません。");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値をお願いします。");
    }
    this.addReports(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
  // ベースクラスをオーバーライドできる
  describe() {
    console.log("会計部門 - ID: " + this.id);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    // employeeがprivateだとbase classでしか変更できないのでエラー
    // この場合はemployeeをprotectedに変更するとsub classでも変更できる。
    this.employees.push(name);
  }
}

// Static 静的メソッド＆静的プロパティ
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d2", ["Max"]);
// console.log(accounting);
it.addEmployee("Max");
it.addEmployee("Min");
// accounting.employees[2] = "Ann"; // 同じ方法で追加できるべきでこれは良くない,privateで防止できる。
it.describe();
it.printEmployeeInformation();
console.log(it);
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();

// const accounting = new AccountingDepartment("d3", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

accounting.addReports("Something");
accounting.mostRecentReport = "通期会計レポート";
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Beth");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
