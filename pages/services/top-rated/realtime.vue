<template>
  <main
    class="flex relative flex-col gap-5 items-center w-full justify-center z-0 h-full"
  >
    <nuxt-img
      src="/category-banner.jpg"
      format="webp"
      loading="lazy"
      quality="100"
      fit="cover"
      sizes="md:100vw sm:100vw"
      class="h-52 w-[100vw] absolute top-0 left-0 right-0 bottom-0 -z-10"
    />
    <div
      class="h-52 w-[100vw] absolute top-0 left-0 right-0 bottom-0 bg-dark300 bg-opacity-30 -z-10"
    />
    <div class="flex flex-col w-full justify-center md:gap-5 items-center mt-4">
      <h1 class="text-light200 text-3xl font-semibold capitalize">
        {{ route?.params }}
      </h1>

      <h-bread-crumb class="w-fit"></h-bread-crumb>
    </div>

    <h-auto-complete
      placeholder="Search Products"
      class="max-w-3xl w-full px-[5%]"
    />

    <nav
      class="w-full xl:h-14 h-fit p-3 relative bg-light300 rounded-md flex gap-6 justify-start items-start"
    >
      <div
        class="flex items-center relative gap-2 2xl:text-base text-md font-semibold hover:text-primary"
        @mouseenter="open = true"
      >
        <Icon name="icon-park-solid:all-application" class="w-5 h-5" />
        <span>All</span>
        <h-nested-dropdown
          :all-category="for_dropdown_service_category"
          class="absolute top-0 left-0 z-30"
          v-model="open"
        />
      </div>
      <div
        v-if="service_categories"
        class="flex-1 w-full flex xl:flex-nowrap flex-wrap items-center overflow-x-auto gap-6"
      >
        <NuxtLink
          v-for="category in service_categories"
          :key="category.id"
          :to="{
            name: 'services-category-name-id',
            params: { name: category.name?.[0]?.name, id: category.id },
          }"
          class="flex-1 flex items-center min-w-fit gap-3 2xl:text-base text-md font-semibold"
        >
          <nuxt-img
            :src="category.logo"
            format="webp"
            loading="lazy"
            quality="100"
            fit="cover"
            width="32px"
            height="32px"
            class="rounded-full w-[32px] h-[32px]"
          />
          <p>{{ category?.name[0]?.name }}</p>
        </NuxtLink>
      </div>
    </nav>
    <section class="max-w-[90rem] mx-auto w-full space-y-6 px-5">
      <div class="my-10 flex gap-5 relative">
        <div class="max-w-[13rem] w-full">
          <div class="flex flex-col gap-3 text-neutral200 w-full">
            <h1 class="text-lg font-bold">Filter</h1>

            <strong class="font-semibold px-2">By Category</strong>
            <div
              class="flex flex-col gap-2 px-5 max-h-[10rem]"
              v-if="store.getRealTimeServiceCategory(locale)"
            >
              <span
                class="text-sm font-semibold cursor-pointer"
                v-for="cat in store.getRealTimeServiceCategory(locale)"
                :class="[search_category == cat.id ? 'text-primary' : '']"
                :key="cat.id"
                @click="
                  () => {
                    select_category(cat?.id);
                  }
                "
              >
                {{ cat?.name[0].name }}
              </span>
            </div>

            <h1 class="font-semibold px-2">Status</h1>

            <div class="flex gap-3 items-center px-5 text-sm">
              <input
                id="licensed"
                type="checkbox"
                v-model="license"
                class="appearance-none w-4 h-4 checked:ring-1 accent-primary ring-offset-2 rounded-[0.2rem] text-light150 border-primary border-1 active:bg-primary focus:ring-primary focus:text-primary checked:text-primary cursor-pointer"
              />
              <label for="licensed">Licensed</label>
            </div>

            <h1 class="font-semibold px-2">Location</h1>
            <h-text-field
              type="search"
              name="location_search"
              class="h-[1.7rem]"
              placeholder="search location"
              v-model="search_location"
            />
            <div
              class="flex flex-col gap-4 max-h-[12rem] overflow-y-auto"
              v-if="locations"
            >
              <div
                class="flex gap-3 items-center px-5 text-sm"
                v-for="loc in locations"
                :key="loc"
              >
                <input
                  :id="loc?.id"
                  type="checkbox"
                  name="address"
                  :value="loc?.name[1]?.name"
                  v-model="location"
                  class="appearance-none w-4 h-4 checked:ring-1 accent-primary ring-offset-2 rounded-[0.2rem] text-light150 border-primary border-1 active:bg-primary focus:ring-primary focus:text-primary checked:text-primary cursor-pointer"
                />
                <label :for="loc?.id">{{
                  findNameBasedOnLanguage(loc?.name, locale).name
                }}</label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full">
          <div
            class="flex gap-2 ml-auto items-center mb-4 justify-between w-full"
          >
            <div
              class="px-6 py-1 bg-light200 rounded-full text-red space-x-2 cursor-pointer hover:bg-red/30"
              :class="[
                search_category || license || location?.length > 0
                  ? 'visible'
                  : 'invisible',
              ]"
              @click="
                () => {
                  search_category = null;
                  license = false;
                  location = [];
                }
              "
            >
              Clear Filter
              <Icon name="ic:round-clear" class="w-5 h-5 text-red" />
            </div>
            <Icon
              @click="
                listType == ListType.GRID
                  ? (listType = ListType.LIST)
                  : (listType = ListType.GRID)
              "
              :name="
                listType == ListType.GRID
                  ? 'material-symbols:view-list'
                  : 'material-symbols:grid-on-sharp'
              "
              class="w-5 h-5 cursor-pointer"
            />
          </div>
          <h-banner></h-banner>
          <div v-if="serviceLoading">
            <h-skeleton-loader />
          </div>
          <div v-if="serviceError" class="py-4">
            <h-error />
          </div>

          <div
            v-if="
              listType === ListType.GRID && !serviceLoading && service_results
            "
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4"
          >
            <ServicePrimaryGridCard
              class=""
              v-for="service in service_results"
              :key="service.id"
              :id="service.id"
              :title="service.title"
              :type="Type.REALTIME"
              :availability="{
                days: service?.availability?.per_week?.length,
                hours: calculateTime(
                  service?.availability?.per_day?.start_time,
                  service?.availability?.per_day?.end_time
                ),
              }"
              :images="groupImages(service.logo, service.medias)"
              :supplier="
                service.supplier.userById.first_name +
                ' ' +
                service.supplier.userById.last_name
              "
              :licensed="service.license != null"
              :score="service?.average_rate"
              :autoplay="false"
            />
          </div>
          <div
            v-if="!serviceLoading && service_results?.length <= 0"
            class="w-full mx-auto justify-center items-center py-1 flex"
          >
            <h-search-not-found />
          </div>

          <div
            v-else-if="listType === ListType.LIST"
            class="flex flex-col gap-5 mt-5 w-[100%]"
          >
            <ServicePrimaryListCard
              class="w-full"
              v-for="service in service_results"
              :key="service.id"
              :id="service.id"
              :type="Type.REALTIME"
              :title="service.title"
              :availability="{
                days: service.availability.per_week,
                hours: calculateTime(
                  service.availability.per_day.start_time,
                  service.availability.per_day.end_time
                ),
              }"
              :score="service.average_rate"
              :supplier="
                service.supplier.userById.first_name +
                ' ' +
                service.supplier.userById.last_name
              "
              :images="groupImages(service.logo, service.medias)"
            />
          </div>

          <h-pagination
            class="my-5"
            :items-per-page="limit"
            :total-data="total_service"
            @update:offset="updateOffset"
            :offset="offset"
          ></h-pagination>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import top_rate from "~/apollo/query/service/realtime/top_rate.gql";
import { useStore } from "~/store/data";
const { locale } = useI18n();
const route = useRoute();
const rate = ref();
const license = ref(false);
const location = ref([]);
const limit = ref(10);
const offset = ref(0);
const store = useStore();
const search_location = ref("");
const open = ref(false);
const search_category = ref();
enum ListType {
  GRID,
  LIST,
}
enum Type {
  REALTIME,
  VIRTUAL,
}
const listType = ref(ListType.GRID);

const variable = computed(() => {
  return {
    limit: limit.value,
    offset: offset.value,
    where: {
      release_status: { _eq: "verified" },

      average_rate: {
        _gte: 1,
      },
      ...(search_category.value
        ? { category_id: { _eq: search_category.value } }
        : {}),
      ...(!license.value ? { license: { _is_null: license.value } } : {}),

      ...(location.value.length > 0
        ? {
            service_addresses: {
              sub_city: {
                _or: [
                  {
                    original_language: {
                      translation_contents: {
                        name: {
                          _in: location.value,
                        },
                      },
                    },
                  },
                  {
                    region_city: {
                      original_language: {
                        translation_contents: {
                          name: {
                            _in: location.value,
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
          }
        : {}),
    },
  };
});

watch([location, search_category, license], ([loc, cat, lic]) => {
  offset.value = 0;
});

const {
  error: top_rate_error,
  result: top_rated_result,
  refetch: refetch_top_rated,
  loading: loading_top_rate,
  onError: onFetchTopRatedServiceError,
} = useCustomQuery(top_rate, variable);

const locations = computed(() => {
  let subcity = store?.$state?.sub_city;
  let region = store?.$state?.region_city;

  if (subcity && region) {
    let region_and_sub_city = [...subcity, ...region];
    return region_and_sub_city.filter((value) => {
      return value?.name[1]?.name
        ?.toUpperCase()
        ?.includes(search_location.value.toUpperCase().trim());
    });
  }
  return [];
});

const updateOffset = (value: number) => {
  console.log(value);
  offset.value = value;
};

const service_categories = computed(() => {
  return store.getRealTimeServiceCategory(locale.value);
});
const for_dropdown_service_category = computed(() => {
  console.log(store.getRealTimeServiceCategory(locale.value));
  return store.getRealTimeServiceCategory(locale.value)?.map((element) => {
    console.log(element);
    return {
      name: element.name[0]?.name,
      id: element.id,
    };
  });
});

const select_category = (id: number) => {
  search_category.value = id;
};

watch([location, search_category, license], ([loc, cat, lic]) => {
  offset.value = 0;
});

const service_results = computed(() => {
  return top_rated_result.value?.service;
});

const total_service = computed(() => {
  return top_rated_result.value?.total?.top_rated?.value;
});

useHead({
  title: "Service-" + route?.params?.name,
});

definePageMeta({
  layout: "custom",
});
</script>
