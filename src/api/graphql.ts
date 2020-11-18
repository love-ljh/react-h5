import graphql from 'graphql-tag'

// spacex

// export const QUERY_LAUNCH_LIST = graphql`
//   query LaunchList {
//     launches {
//       flight_number
//       mission_name
//       launch_year
//     }
//   }
// `

// export const QUERY_LAUNCH_PROFILE = graphql`
//   query LaunchProfile($id: String!) {
//     launch(id: $id) {
//       flight_number
//       mission_name
//       launch_year
//       launch_success
//       details
//       launch_site {
//         site_name
//       }
//       rocket {
//         rocket_name
//         rocket_type
//       }
//       links {
//         flickr_images
//       }
//     }
//   }
// `

// custom page
export const QUERY_CUSTOM = graphql`
  query Custom {
    custom {
      a
      b
    }
  }
`
