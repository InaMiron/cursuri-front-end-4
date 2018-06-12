const fetchData = () => {
    return $.ajax('https://api.wunderground.com/api/cfbfc5f603141e07/conditions/q/RO/Cluj_Napoca.json', {
    method:"GET",
    success:(response) => {
      console.log(response);
    },
    error:(xhr) => {
      alert("Something went wrong fetching Data")
    }
   })
  }