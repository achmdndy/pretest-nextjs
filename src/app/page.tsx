import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FormFindFloor } from './_components/form-find-floor';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Find Floor</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <FormFindFloor />
        </CardContent>
      </Card>
    </main>
  );
}
