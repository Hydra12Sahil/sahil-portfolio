import Types "../types/contact";
import List "mo:core/List";

module {
  public type ContactSubmission = Types.ContactSubmission;

  public func add(
    submissions : List.List<ContactSubmission>,
    state : { var nextId : Nat },
    name : Text,
    email : Text,
    message : Text,
    timestamp : Int,
  ) : ContactSubmission {
    let submission : ContactSubmission = {
      id = state.nextId;
      name;
      email;
      message;
      timestamp;
    };
    state.nextId += 1;
    submissions.add(submission);
    submission;
  };

  public func getAll(
    submissions : List.List<ContactSubmission>
  ) : [ContactSubmission] {
    submissions.toArray();
  };
};
