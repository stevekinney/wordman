import { createServer, Model, RestSerializer } from 'miragejs';

const ApplicationSerializer = RestSerializer.extend({});

export function makeServer({ environment = 'development' }) {
  return createServer({
    environment,

    serializers: {
      application: ApplicationSerializer,
    },

    fixtures: {},

    models: {},

    routes() {
      this.timing = 2000;
      this.namespace = 'api';
    },
  });
}
