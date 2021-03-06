<template>
  <tr>
    <td class="table__whitespace">
      <div class="table__employee">
        <div class="table__employee-pic">
          <!-- Using an array to request dynamically a different img to unsplash API -->
          <!-- Otherwise would only call one img for all the requests -->
          <!-- Also, this was easier than implementing another mirage namespace, maybe slower -->
          <img
            id="image"
            class="table__employee-img"
            :src="'https://source.unsplash.com/350x350/?' + avatar[index]"
          >
        </div>
        <div class="ml-4">
          <div
            id="username"
            class="font-medium custom-text--1"
          >
            {{ userName }}
          </div>
          <div
            id="email"
            class="custom-text--2"
          >
            {{ email }}
          </div>
        </div>
      </div>
    </td>
    <!-- Date reference https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/ -->
    <td class="table__whitespace">
      <div
        id="lastlogin"
        class="custom-text--1"
      >
        {{ lastLogin }}
      </div>
      <div
        id="timeago"
        class="custom-text--2"
      >
        {{ timeAgo }}
      </div>
    </td>
    <td
      id="department"
      class="table__whitespace custom-text--1"
    >
      {{ department }}
    </td>
    <td class="table__whitespace">
      <span
        id="textstatus"
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
    index: {
      type: Number,
      default: function () {
        return 0;
      },
      required: false,
    },
    department: {
      type: String,
      default: function () {
        return {
          message: "no department",
        };
      },
      required: false,
    },
    email: {
      type: String,
      default: function () {
        return {
          message: "no email",
        };
      },
      required: false,
    },
    firstName: {
      type: String,
      default: function () {
        return {
          message: "firstname",
        };
      },
      required: false,
    },
    lastName: {
      type: String,
      default: function () {
        return {
          message: "lastname",
        };
      },
      required: false,
    },
    // picture: {
    //   type: String,
    //   default: function () {
    //     return {
    //       message: "",
    //     };
    //   },
    // },
    sessions: {
      type: Array,
      default: function () {
        return [];
      },
      required: false,
    },
    status: {
      type: Boolean,
      default: function () {
        return false;
      },
      required: false,
    },
  },
  data() {
    return {
      avatar: ["avatar", "profile", "me", "picture", "selfie"],
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
    // picUrl(){
    //   return this.picture;
    // }
  },
  methods: {
    // helper func to find max date on miliseconds
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
    // A helper function to build the desired date format
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
      // search for the latest login date
      const lastDate = this.maxNumberIn(this.sessions);

      const monthIndex = new Date(lastDate).getMonth();
      const date = {
        day: new Date(lastDate).getDate(),
        year: new Date(lastDate).getFullYear(),
        month: this.getFullMonth(monthIndex),
      };

      return date.month + " " + date.day + ", " + date.year;
    },
  },
};
</script>

<style lang="postcss">
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
/* responsiveness for 1366px to 1920px */
/*  without this custom-text-xxs won't get override by 2xl:text-sm */
/* I think this isn't the best practice, but I leave it here for reference */
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
  .custom-text-red {
    color: #f03738;
  }
  .custom-text-green {
    color: #54c953;
  }
}
</style>