import { Card, CardContent, CardHeader, CardTitle } from '@ui';
import { LoginForm } from './form';

export const Login = () => {
  return (
    <div className="grid h-dvh w-full place-items-center bg-gray-50">
      <Card className="min-w-96 border border-inherit">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Log In</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};
