import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { features } from '@/lib/data';

export function Features() {
  return (
    <section className="bg-primary-600 text-white">
      <div className="container mx-auto max-w-6xl space-y-8 text-center">
        <h2>Features</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-1 flex-col items-center justify-center">
                  <Icon className="mb-4 size-8 text-primary-600" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
