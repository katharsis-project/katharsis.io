import io.katharsis.invoker.KatharsisInvokerBuilder;
import io.katharsis.locator.JsonServiceLocator;
import io.katharsis.locator.SampleJsonServiceLocator;

import javax.servlet.FilterConfig;
import javax.servlet.ServletException;

public class SampleKatharsisFilter extends AbstractKatharsisFilter {

    private String resourceSearchPackage;
    private String resourceDefaultDomain;

    public void init(FilterConfig filterConfig) throws ServletException {
        super.init(filterConfig);
        resourceSearchPackage = filterConfig
            .getInitParameter(KatharsisProperties.RESOURCE_SEARCH_PACKAGE);
        resourceDefaultDomain = filterConfig
            .getInitParameter(KatharsisProperties.RESOURCE_DEFAULT_DOMAIN);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        super.init(filterConfig);
        resourceSearchPackage = filterConfig
            .getInitParameter(KatharsisProperties.RESOURCE_SEARCH_PACKAGE);
        resourceDefaultDomain = filterConfig
            .getInitParameter(KatharsisProperties.RESOURCE_DEFAULT_DOMAIN);
    }

    /**
     * NOTE: A class extending this must provide a platform specific {@link JsonServiceLocator}
     *       instead of the (testing-purpose) {@link SampleJsonServiceLocator} below
     *       in order to provide advanced dependency injections for the repositories.
     */
    @Override
    protected KatharsisInvokerBuilder createKatharsisInvokerBuilder() {
        return new KatharsisInvokerBuilder()
            .resourceSearchPackage(resourceSearchPackage)
            .resourceDefaultDomain(resourceDefaultDomain)
            .jsonServiceLocator(new SampleJsonServiceLocator());
    }
}
