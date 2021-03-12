<template>
  <tr>
    <td class="table__whitespace">
      <div class="table__employee">
        <div class="table__employee-pic">
          <img
            class="table__employee-img"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
            alt=""
          >
        </div>
        <div class="ml-4">
          <div class="font-medium custom-text--1">
            {{ userName }}
          </div>
          <div class="custom-text--2">
            {{ email }}
          </div>
        </div>
      </div>
    </td>
    <!-- Date reference https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/ -->
    <td class="table__whitespace">
      <div class="custom-text--1">
        {{ lastLogin }}
      </div>
      <div class="custom-text--2">
        {{ timeAgo }}
      </div>
    </td>
    <td class="table__whitespace custom-text--1">
      {{ department }}
    </td>
    <td class="table__whitespace">
      <span
        class="table__employee-status"
        :class="userStatus"
      >
        {{ textStatus }}
      </span>
    </td>
    <td class="table__whitespace">
      <div class="table__arrow-svg">
        <a
          href="#"
          class="text-gray-500 dark:text-indigo-600"
        >
          <svg class="w-5 h-5 fill-current">
            <use
              xlink:href="../assets/symbol-defs.svg#icon-keyboard_arrow_down"
            />
          </svg>
        </a>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    department: {
      type: String,
      default: function () {
        return {
          message: "",
        };
      },
    },
    email: {
      type: String,
      default: function () {
        return {
          message: "",
        };
      },
    },
    firstName: {
      type: String,
      default: function () {
        return {
          message: "",
        };
      },
    },
    lastName: {
      type: String,
      default: function () {
        return {
          message: "",
        };
      },
    },
    picture: {
      type: String,
      default: function () {
        return {
          message: "",
        };
      },
    },
    sessions: {
      type: Array,
      default: function () {
        return {
          message: "",
        };
      },
    },
    status: {
      type: String,
      default: function () {
        return {
          message: "",
        };
      },
    },
  },
  data() {
    return {
      picUrl: "",
    };
  },
  computed: {
    userName() {
      return this.firstName + " " + this.lastName;
    },
    userStatus() {
      return this.status ? "custom-text-green" : "custom-text-red";
    },
    textStatus() {
      return this.status ? "Active" : "Inactive";
    },
    lastLogin() {
      return this.formatDate();
    },
    timeAgo() {
      return this.dateDifference();
    },
  },
  methods: {
    maxNumberIn(date) {
      let array = [
        new Date(date[0]).getTime(),
        new Date(date[1]).getTime(),
        new Date(date[2]).getTime(),
      ];
      let max = 0;
      for (let i = 0; i < array.length; i++) {
        if (max <= array[i]) max = array[i];
      }
      return max;
    },
    dateDifference() {
      const lastLogin = this.maxNumberIn(this.sessions);
      return this.timeDifference(lastLogin);
    },
    // https://www.geeksforgeeks.org/javascript-date-gettime-method/
    // isn't the most accurate, but here does the job well
    timeDifference(date) {
      let today = new Date().getTime();
      var ms_Min = 60 * 1000; // milliseconds in Minute
      var ms_Hour = ms_Min * 60; // milliseconds in Hour
      var ms_Day = ms_Hour * 24; // milliseconds in day
      var ms_Mon = ms_Day * 30; // milliseconds in Month
      var ms_Yr = ms_Day * 365; // milliseconds in Year
      var diff = today - date; //difference between dates.
      // If the diff is less then milliseconds in a minute
      if (diff < ms_Min) {
        return Math.round(diff / 1000) + " seconds ago";

        // If the diff is less then milliseconds in a Hour
      } else if (diff < ms_Hour) {
        return Math.round(diff / ms_Min) + " minutes ago";

        // If the diff is less then milliseconds in a day
      } else if (diff < ms_Day) {
        return Math.round(diff / ms_Hour) + " hours ago";

        // If the diff is less then milliseconds in a Month
      } else if (diff < ms_Mon) {
        return Math.round(diff / ms_Day) + " days ago";

        // If the diff is less then milliseconds in a year
      } else if (diff < ms_Yr) {
        return Math.round(diff / ms_Mon) + " months ago";
      } else {
        return Math.round(diff / ms_Yr) + " years ago";
      }
    },
    getFullMonth(monthIndex) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return months[monthIndex];
    },
    formatDate() {
      const lastDate = this.maxNumberIn(this.sessions);

      const monthIndex = new Date(lastDate).getMonth();
      const date = {
        day: new Date(lastDate).getDay(),
        year: new Date(lastDate).getFullYear(),
        month: this.getFullMonth(monthIndex),
      };

      return date.month + " " + date.day + ", " + date.year;
    },
  },
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
.table__whitespace {
  @apply px-2 py-3 2xl:px-6 2xl:py-4 whitespace-nowrap;
}
.custom-text--1 {
  @apply custom-text-xxs override-text-to-sm text-gray-900 dark:text-indigo-200;
}
.custom-text--2 {
  @apply custom-text-tiny override-text-to-xs text-gray-500 dark:text-gray-400;
}
.table__employee {
  @apply flex items-center;
}
.table__employee-pic {
  @apply flex-shrink-0 ml-1 h-5 w-5 2xl:h-9 2xl:w-9;
}
.table__employee-img {
  @apply h-5 w-5 2xl:h-9 2xl:w-9 rounded-full;
}
.table__employee-status {
  @apply inline-flex custom-text-tiny override-text-to-sm leading-5 font-semibold;
}
.table__arrow-svg {
  @apply flex items-center justify-center;
}

/*  without this custom-text-xxs won't get override by 2xl:text-sm */
.override-text-to-sm {
  @apply 2xl:text-sm !important;
}
.override-text-to-xs {
  @apply 2xl:text-xs !important;
}
@layer utilities {
  @variants responsive {
    .custom-text-xxs {
      font-size: 0.8rem;
      line-height: 1rem;
    }
    .custom-text-tiny {
      font-size: 0.7rem;
      line-height: 0.8rem;
    }
  }
  @variants dark {
  }
  .custom-text-red {
    color: #f03738;
  }
  .custom-text-green {
    color: #54c953;
  }
}
</style>