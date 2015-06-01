@JsonApiResource(type = "tasks")
public class Task {

	// ID field

	@JsonApiToMany
	private List<Project> projects;

	// fields, getters and setters
}
