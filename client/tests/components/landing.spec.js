import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Landing from '../src/components/Landing/Landing';

test('renders content', () => {
    const countryDetail = {
        content: 'This is a test',
        important: true
    }
    const component = render(<Landing />)
    console.log(component);
})




// const { Country, conn } = require('../../src/db.js');
// const { expect } = require('chai');

// describe('Country model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Country.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Country.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Country.create({ name: 'Argentina' });
//       });
//     });
//   });
// });
