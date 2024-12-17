import { baseApi } from "../../API/baseAPI";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacilities: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
      providesTags: ["facilities"],
    }),

    getFacilityDetails: builder.query({
      query: (id) => ({
        url: `/facility/details/${id}`,
        method: "GET",
      }),
    }),

    checkAvailability: builder.mutation({
      query: (date) => ({
        url: `/check-availability?date=${date}`,
        method: "POST",
      }),
    }),

    createBooking: builder.mutation({
      query: (payload) => ({
        url: `/bookings`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["bookingsByUser"],
    }),

    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["facilities"],
    }),

    updateFacility: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/facility/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["facilities"],
    }),

    createFacility: builder.mutation({
      query: (payload) => ({
        url: `/facility`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["facilities"],
    }),
  }),
});

export const {
  useGetAllFacilitiesQuery,
  useGetFacilityDetailsQuery,
  useCheckAvailabilityMutation,
  useCreateBookingMutation,
  useDeleteFacilityMutation,
  useUpdateFacilityMutation,
  useCreateFacilityMutation,
} = authApi;
