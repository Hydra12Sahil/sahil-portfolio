import List "mo:core/List";
import Types "types/contact";
import ContactMixin "mixins/contact-api";

actor {
  let submissions = List.empty<Types.ContactSubmission>();
  let contactState = { var nextId : Nat = 0 };
  include ContactMixin(submissions, contactState);
};
