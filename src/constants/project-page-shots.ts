export type ProjectPageShot = {
  alt: string;
  href: string;
  position: string;
  src: string;
};

const PROJECT_PAGE_SHOTS: Record<string, ProjectPageShot[]> = {
  "portalbosque.com": [
    {
      alt: "Portal Bosque home page",
      href: "https://www.portalbosque.com/",
      position: "object-center",
      src: "https://gqbv64qxck.ufs.sh/f/ojdYOw5LQOrYcrOdfuM6QYKogf8uzFI0nDha93BtTZiGW67r",
    },
    {
      alt: "Portal Bosque agenda page",
      href: "https://www.portalbosque.com/agenda",
      position: "object-[center_35%]",
      src: "https://gqbv64qxck.ufs.sh/f/ojdYOw5LQOrYWfMMJbXGTtf1rycW3S9s4nNJu08wZBKCxzVp",
    },
    {
      alt: "Portal Bosque membership page",
      href: "https://www.portalbosque.com/membresia",
      position: "object-[center_62%]",
      src: "https://gqbv64qxck.ufs.sh/f/ojdYOw5LQOrYJYQxQ70RZohvidLe7OG0l1SxpqPnfKkIN8b4",
    },
  ],
  "tuse.vercel.app": [
    {
      alt: "Tuse home page",
      href: "https://tuse.vercel.app/",
      position: "object-center",
      src: "https://gqbv64qxck.ufs.sh/f/ojdYOw5LQOrY3mWTYnC68eBJT7R2mAH0GSZVw9nO4vIasxoj",
    },
    {
      alt: "Tuse governance page",
      href: "https://tuse.vercel.app/gobernanza",
      position: "object-top",
      src: "https://gqbv64qxck.ufs.sh/f/ojdYOw5LQOrYLO0u3vxWnHswX9iZKfRVBa1eTbkyc7MJh8NA",
    },
    {
      alt: "Tuse about page",
      href: "https://tuse.vercel.app/sobre-nosotros",
      position: "object-top",
      src: "https://gqbv64qxck.ufs.sh/f/ojdYOw5LQOrYlWZKVK2bNnZplKgGu0UyTf5S4sQHiErWYIAd",
    },
  ],
};

const WWW_PREFIX = /^www\./;

function siteHost(url: string | undefined): string {
  const value = url?.trim();
  if (!value) {
    return "";
  }

  try {
    return new URL(value).hostname.replace(WWW_PREFIX, "");
  } catch {
    return "";
  }
}

export function pageShotsFor(
  deploy: string | undefined,
  fallback: { alt: string; href: string; src: string }
): ProjectPageShot[] {
  const gallery = PROJECT_PAGE_SHOTS[siteHost(deploy)];
  if (gallery && gallery.length > 0) {
    return gallery;
  }

  if (!fallback.src) {
    return [];
  }

  return [{ ...fallback, position: "object-center" }];
}
