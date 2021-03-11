<template>
  <div>
    <nav class="bg-blue-700 rounded-md">
      <div class="mx-auto px-2 sm:px-6 lg:px-8">
        <!-- navbar flex items -->
        <div class="relative flex items-center justify-between h-16">
          <!-- left navbar -->
          <div
            class="flex-1 flex items-stretch justify-start pl-6"
          >
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-white text-2xl mr-16 uppercase font-bold">
                Logo
              </h1>
            </div>
            <div
              class="flex space-x-12 items-center justify-items-center justify-center"
            >
              <a href="#" class="text-white px-3 py-2 text-base font-medium"
                >Menu</a
              >
              <a href="#" class="text-white px-3 py-2 text-base font-medium"
                >Menu</a
              >
              <a href="#" class="text-white px-3 py-2 text-base font-medium"
                >Menu</a
              >
              <a href="#" class="text-white px-3 py-2 text-base font-medium"
                >Menu</a
              >
            </div>
          </div>
          <!-- right navbar -->
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-6"
          >
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  type="button"
                  class="bg-white flex text-sm rounded-full border border-white focus:outline-none focus:ring-none focus:ring-offset-0"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                  @click="isDropdownOpen = !isDropdownOpen"
                >
                  <img
                    class="h-9 w-9 rounded-full flex items-center"
                    src="../assets/profile-pic.jpg"
                    alt=""
                  />
                </button>
              </div>
              <div
                class="origin-top-right cursor-pointer absolute right-0 mt-2 w-56 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border-gray-200 border-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
                v-if="isDropdownOpen"
              >
                <div
                  role="menuitem"
                  class="flex items-center hover:bg-blue-100 border-gray-200 border-b-2"
                >
                  <span
                    class="text-gray-600 self-start relative top-4 left-4 w-11"
                  >
                    <svg class="w-5 h-5 fill-current">
                      <use
                        xlink:href="../assets/symbol-defs.svg#icon-user-solid-circle"
                      ></use>
                    </svg>
                  </span>
                  <div class="flex flex-col justify-around pt-3">
                    <a href="#" class="px-2 py-1 text-sm text-gray-800"
                      >My Profile</a
                    >
                    <span
                      class="px-2 pb-2 text-xs font-medium w-6/7 text-gray-400"
                      >Change settings of your account.</span
                    >
                  </div>
                </div>

                <div
                  role="menuitem"
                  class="flex items-center hover:bg-blue-100"
                >
                  <span class="text-red-500 relative bottom-0 left-4 w-11">
                    <svg class="w-5 h-5 fill-current">
                      <use
                        xlink:href="../assets/symbol-defs.svg#icon-logout"
                      ></use>
                    </svg>
                  </span>
                  <a href="#" class="block px-4 py-2 text-sm text-red-500"
                    >Logout</a
                  >
                </div>
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
};
</script>

<style>
</style>