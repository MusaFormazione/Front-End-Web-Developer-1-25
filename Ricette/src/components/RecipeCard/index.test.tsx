import { describe, expect, it } from 'vitest';
import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import RecipeCard from '.';

describe('RecipeCard Component', () => {
  it('renders recipe details correctly', () => {
    const mockRecipe = {
      id: "1",
      name: 'Spaghetti Carbonara',
      tags: ['Italian', 'Pasta', 'Main Course'],
      ingredients: [],
      instructions: [],
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      servings: 4,
      difficulty: 'Medium',
      cuisine: 'Italian',
      caloriesPerServing: 500,
      userId: 123,
      image: 'https://example.com/image.jpg',
      rating: 4.5,
      reviewCount: 150,
      mealType: ['Dinner']
    };

    render(<RecipeCard recipe={mockRecipe} />);

    expect(screen.getByText('Spaghetti Carbonara')).toBeInTheDocument();
    expect(screen.getByText('Italian, Pasta, Main Course')).toBeInTheDocument();
  });
})
