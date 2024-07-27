import useAuth from '@/composables/useAuth';

export default function (to, from, next) {
  const { isAuthentication } = useAuth();

  if (to.meta.auth && !isAuthentication.value) {
        next('/login');
    } else if (to.meta.auth == false && isAuthentication.value) {
        next('/home');
    } else {
      next();
  }
}
