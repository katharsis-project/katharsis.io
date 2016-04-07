public class CommaDelimitedQueryParamsParser implements QueryParamsParser {

    @Override
    public Map<String, Set<String>> parseIncludedRelationsParameters(
        final Map<String, Set<String>> queryParams) {
        String includeKey = RestrictedQueryParamsMembers.include.name();
        return filterQueryParamsByKey(queryParams, includeKey);
    }

    // other parsing methods

    private static Map<String, Set<String>> filterQueryParamsByKey(
        Map<String, Set<String>> queryParams, String queryKey) {
        Map<String, Set<String>> filteredQueryParams = new HashMap<>();

        for (Map.Entry<String, Set<String>> entry : queryParams.entrySet()) {
            if (entry.getKey().startsWith(queryKey)) {
                Set<String> commaSeparatedValues = entry.getValue();
                Set<String> splittedValues = new HashSet<>();
                for (String commaSeparatedValue : commaSeparatedValues) {
                    splittedValues.addAll(Arrays.asList(commaSeparatedValue.split(",")));
                }
                filteredQueryParams.put(entry.getKey(), splittedValues);
            }
        }
        return filteredQueryParams;
    }
}