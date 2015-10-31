@JsonApiResource(type = "tasks")
public class Task {

	// ID field

	@JsonApiToOne
	@JsonApiLookupIncludeAutomatically
	private Project project;

	// fields, getters and setters
}
