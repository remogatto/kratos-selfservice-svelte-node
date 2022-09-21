import { getIdentity } from "$lib/kratos";
import identity from "$lib/stores/kratos/identity";

// ---------------------------Q--------------------------------------------------
export const csr = true;
export const prerender = false;

export async function load() {
  await getIdentity()
    .then((_identity) => {
      identity.set(_identity);
    })
    .catch(() => {
      //no identity
    });
}
