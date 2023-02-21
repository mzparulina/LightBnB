$(() => {

  const $propertyListings = $(`
    <section class="property-listings" id="property-listings">
      <p>Loading...</p>
    </section>
  `);

  window.$propertyListings = $propertyListings;
  window.propertyListings = {};

  function addListing(listing) {
    $propertyListings.append(listing);
  }
  function clearListings() {
    $propertyListings.empty();
  }
  window.propertyListings.clearListings = clearListings;

  function addProperties(properties, isReservation = false) {
    clearListings();
    if(properties.length > 0) {
      for (const propertyId in properties) {
        const property = properties[propertyId];
        const listing = propertyListing.createListing(property, isReservation);
        addListing(listing);
      }
    } else {
      $propertyListings.append('<h1>No Results Found</h1>');
    }
  }
  window.propertyListings.addProperties = addProperties;

});