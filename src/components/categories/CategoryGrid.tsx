// src/components/categories/CategoryGrid.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';

type CategoryColor = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

interface Category {
  name: string;
  icon: string;
  color: CategoryColor;
}

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {categories.map((category) => (
        <Button
          key={category.name}
          variant="flat"
          color={category.color}
          className="flex flex-col items-center justify-center h-24"
          as={Link}
          href={`/categories/${category.name.toLowerCase()}`}
        >
          <span className="text-3xl mb-2">{category.icon}</span>
          <span className="text-xs">{category.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default CategoryGrid;
