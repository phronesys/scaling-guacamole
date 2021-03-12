import faker from "faker";
import { createServer, Model, Factory } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      user: Model,
      report: Model,
    },

    factories: {
      user: Factory.extend({
        profile_img() {
          // this returns a private url, check out this:
          // https://github.com/Marak/faker.js/issues/1046
          return faker.image.nature();
        },
        first_name() {
          return faker.name.firstName();
        },
        last_name() {
          return faker.name.lastName();
        },
        email() {
          return faker.internet.email();
        },
        sessions() {
          return [faker.date.past(), faker.date.past(), faker.date.past()];
        },
        status() {
          return faker.random.boolean();
        },
        department() {
          return faker.commerce.department();
        },
      }),
    },

    seeds(server) {
      server.createList("user", 5);

      server.create("report", {
        category: "DUNNO",
        total: faker.random.number(),
      });
      server.create("report", {
        category: "I'm boring",
        total: faker.random.number(),
      });
      server.create("report", {
        category: "Money",
        total: faker.random.number(),
      });
      server.create("report", {
        category: "Fun",
        total: faker.random.number(),
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => schema.users.all());
      this.get("/reports", (schema) => schema.reports.all());
    },
  });
}
