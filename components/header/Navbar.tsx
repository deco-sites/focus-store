import Searchbar from "$store/islands/HeaderSearchbar.tsx";
import Buttons from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full px-3 gap-2">
        <div class="w-1/5">
          <Buttons variant="menu" />
        </div>
        <a
          href="/"
          class="w-3/5 inline-flex justify-center items-center py-2"
          aria-label="Store logo"
        >
          <Icon id="Logo" width={135} height={62} />
        </a>
        <div class="flex w-1/5 gap-1 justify-end">
          <Buttons variant="search" />
          <Buttons variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Icon id="Logo" width={135} height={62} />
          </a>
        </div>
        <div class="flex flex-grow-1 justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-grow-1 flex items-center justify-end gap-2">
          <Buttons variant="search" />
          <Searchbar searchbar={searchbar} />
          <a
            class="btn btn-sm btn-ghost"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
            Minha conta
          </a>
          <a
            class="btn btn-sm btn-ghost"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <Icon
              id="Heart"
              size={20}
              strokeWidth={2}
              fill="none"
            />
            Favoritos
          </a>
          <Buttons variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
