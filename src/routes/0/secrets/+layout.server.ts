import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
  const authenticated = cookies.get('secrets_authenticated');

  if (!authenticated) {
    redirect(302, '/0');
  }
};
