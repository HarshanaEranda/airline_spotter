class Airline {
    constructor(
      airlineName,
      shortName,
      airlineCode,
      location,
      createdDate,
      active = true,
      deleted = false,
      createdUserId,
      modifiedUserId
    ) {
      this.airlineName = airlineName;
      this.shortName = shortName;
      this.airlineCode = airlineCode;
      this.location = location;
      this.createdDate = createdDate;
      this.active = active;
      this.deleted = deleted;
      this.createdUserId = createdUserId;
      this.modifiedUserId = modifiedUserId;
    }
  }
  
  export default Airline;