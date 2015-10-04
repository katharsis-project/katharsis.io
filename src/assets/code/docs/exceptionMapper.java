@ExceptionMapperProvider
public class SampleExceptionMapper implements JsonApiExceptionMapper<SampleException> {
	@Override
	public ErrorResponse toErrorResponse(SampleException exception) {
		return ErrorResponse.builder()
			.setStatus(HttpStatus.INTERNAL_SERVER_ERROR_500)
			.setSingleErrorData(ErrorData.builder()
				.setTitle(exception.getTitle())
				.setId(exception.getId())
				.build())
			.build();
	}
}
