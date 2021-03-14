<template>
  <div>
    <!-- click out to close the dropdown -->
    <div
      v-if="isDropdownOpen"
      id="backdrop"
      class="backdrop"
      @click="dropdownFalse()"
    />
    <nav class="navbar">
      <!-- navbar flex items -->
      <div class="navbar__left">
        <!-- left navbar -->
        <div class="navbar__items">
          <div class="navbar__items--logo">
            <h1 class="">
              Logo
            </h1>
          </div>
          <div class="navbar__items--list">
            <a
              href="#"
              class="navbar__items--menu"
            >Menu</a>
            <a
              href="#"
              class="navbar__items--menu"
            >Menu</a>
            <a
              href="#"
              class="navbar__items--menu"
            >Menu</a>
            <a
              href="#"
              class="navbar__items--menu"
            >Menu</a>
          </div>
        </div>
        <!-- right navbar -->
        <div class="navbar__right">
          <!-- Profile dropdown -->
          <div>
            <!-- button picture -->
            <button
              id="user-menu"
              type="button"
              class="navbar__user"
              :aria-expanded="isDropdownOpen"
              aria-haspopup="true"
              @click="dropdownToggle()"
            >
              <img
                class="navbar__user-pic"
                src="../assets/profile-pic.jpg"
                alt=""
              >
            </button>
            <!-- the dropdown -->
            <div
              v-if="isDropdownOpen"
              class="dropdown"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <div
                role="menuitem"
                class="dropdown__item-1"
              >
                <span class="dropdown__item-1--icon">
                  <svg class="dropdown__item-1--svg">
                    <use
                      xlink:href="../assets/symbol-defs.svg#icon-user-solid-circle"
                    />
                  </svg>
                </span>
                <div class="dropdown__profile">
                  <a
                    href="#"
                    class="dropdown__profile-title"
                  >My Profile</a>
                  <span
                    class="dropdown__profile-sub"
                  >Change settings of your account.</span>
                </div>
              </div>

              <div
                role="menuitem"
                class="dropdown__item-2"
              >
                <span class="dropdown__item-2--icon">
                  <svg class="w-5 h-5 fill-current">
                    <use xlink:href="../assets/symbol-defs.svg#icon-logout" />
                  </svg>
                </span>
                <a
                  href="#"
                  class="dropdown__logout"
                >Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    dropdownFalse() {
      this.isDropdownOpen = false;
    },
    dropdownToggle(){
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  },
};
</script>

<style lang="postcss">
.backdrop {
  @apply z-10 fixed w-full h-full left-0 top-0;
}
.navbar {
  background-color: #1e1add;
  @apply rounded-md mx-auto px-8 py-1 dark:bg-gray-900;
}
.navbar__left {
  @apply relative flex items-center justify-between h-16;
}
.navbar__items {
  @apply flex-1 flex items-stretch justify-start pl-6;
}
.navbar__items--logo {
  @apply flex-shrink-0 flex items-center transform scale-125 mr-16 text-xl leading-3 uppercase font-bold text-white dark:text-indigo-500;
}
.navbar__items--list {
  @apply flex space-x-12 items-center justify-items-center justify-center;
}

.navbar__items--menu {
  @apply px-3 py-2 font-medium text-base leading-5 text-white dark:text-purple-300;
}
.navbar__right {
  @apply absolute inset-y-0 right-0 flex items-center pr-0;
}
.navbar__user {
  @apply flex text-sm rounded-full border border-white focus:outline-none focus:ring-offset-0 bg-white;
}
.navbar__user-pic {
  @apply h-10 w-10 rounded-full flex items-center;
}
.dropdown {
  @apply z-20 origin-top-right cursor-pointer absolute right-0 mt-2 w-56 rounded shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none border-gray-200 border-2 bg-white dark:bg-gray-900 dark:border-gray-600;
}
.dropdown__item-1 {
  @apply flex items-center hover:bg-indigo-50  dark:hover:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-600;
}
.dropdown__item-1--icon {
  @apply self-start relative top-4 left-4 w-11 text-gray-600 dark:text-indigo-500;
}
.dropdown__item-1--svg {
  @apply w-5 h-5 fill-current;
}
.dropdown__profile {
  @apply flex flex-col justify-around pt-2 ml-4;
}
.dropdown__profile-title {
  @apply px-2 py-1 text-sm text-gray-800 dark:text-gray-100;
}
.dropdown__profile-sub {
  @apply px-2 pb-2 text-xs font-medium text-gray-400;
}
.dropdown__item-2 {
  @apply flex items-center hover:bg-indigo-50 dark:hover:bg-gray-800;
}
.dropdown__item-2--icon {
  @apply custom-text-red relative bottom-0 left-4 w-11;
}
.dropdown__logout {
  @apply block px-4 py-2 text-sm custom-text-red;
}
@layer utilities {
  .custom-text-red {
    color: #eb6e6e;
  }
  .custom-text-green {
    color: #54c953;
  }
}
</style>