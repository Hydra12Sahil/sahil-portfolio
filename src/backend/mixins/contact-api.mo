import Types "../types/contact";
import ContactLib "../lib/contact";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (
  submissions : List.List<Types.ContactSubmission>,
  state : { var nextId : Nat },
) {
  public func submitContact(name : Text, email : Text, message : Text) : async Types.ContactSubmission {
    ContactLib.add(submissions, state, name, email, message, Time.now());
  };

  public query func getContacts() : async [Types.ContactSubmission] {
    ContactLib.getAll(submissions);
  };
};
