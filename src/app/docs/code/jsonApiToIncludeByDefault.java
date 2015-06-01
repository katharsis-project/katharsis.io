@JsonApiResource(type = "tasks")
public class Task {

	// ID field

	@JsonApiToOne
	@JsonApiIncludeByDefault
	private Project project;

	// fields, getters and setters
}
