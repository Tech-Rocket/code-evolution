import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface RecipeTypes {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

async function getRecipes(): Promise<RecipeTypes[]> {
  const res = await fetch("http://localhost:4000/recipes");
  return res.json();
}

export default async function Home() {
  const recipes = await getRecipes();

  const recipeElement = recipes.map((recipe) => (
    <Card key={recipe.id} className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-4 items-center">
        <Avatar>
          <AvatarImage src={`/img/${recipe.image}`} alt="recipe image" />
          <AvatarFallback>
            {recipe.title.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{recipe.title}</CardTitle>
          <CardDescription>{recipe.time} mins to cook.</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <p className="mt-3">{recipe.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between font-medium">
        <Button>View Recipe</Button>
        {recipe.vegan ? <Badge>Vegan!</Badge> : null}
      </CardFooter>
    </Card>
  ));
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recipeElement}
      </div>
    </main>
  );
}
