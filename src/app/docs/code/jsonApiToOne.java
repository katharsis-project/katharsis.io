@JsonApiResource(type = "tasks")
public class Task {

	// ID field

	@JsonApiToOne
	private Project project;

	// fields, getters and setters
}
