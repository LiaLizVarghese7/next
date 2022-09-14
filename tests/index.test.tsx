import Home from "../pages";

import axios from "axios";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'




jest.mock('axios');
it('returns the title of the first product', async () => {
    (axios.get as jest.Mock)({
      data: [
        {
            date: {
                month: 'January', 
                day: '09', 
                year: 2019
            },
            id: 1,
            price: 10000,
            title : "Car"
        },
        {
            date: {month: 'July', day: '21', year: 2021},
            id: 2,
            price: 5000,
            title: "Bike"
        }
      ]
    });
  
    
    const { container } = render(<Home />)
    console.log(container);
  });
  