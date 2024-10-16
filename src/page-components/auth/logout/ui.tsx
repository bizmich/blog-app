'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from '@ui';
import { LogOut } from 'lucide-react';
import { useLogout } from './services';

export const Logout = () => {
  const logOut = useLogout();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-[350px] border-inherit">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Log Out
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            Are you sure you want to log out of your account?
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => logOut.mutate()}
            disabled={logOut.isPending}
            className="w-full"
          >
            {logOut.isPending ? (
              'Logging out...'
            ) : (
              <>
                <LogOut className="mr-2 h-4 w-4" /> Log Out
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
