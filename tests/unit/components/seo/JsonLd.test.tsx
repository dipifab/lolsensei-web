import { describe, it, expect } from 'vitest';
import { renderJsonLdScript } from '../../../../src/components/seo/JsonLd';

describe('renderJsonLdScript', () => {
  it('serializes Schema.org payload with @context and @type', () => {
    const out = renderJsonLdScript({ '@type': 'Organization', name: 'Test' });
    expect(out).toContain('"@context":"https://schema.org"');
    expect(out).toContain('"@type":"Organization"');
    expect(out).toContain('"name":"Test"');
  });

  it('escapes </script> to prevent breakout from inline script tag', () => {
    const out = renderJsonLdScript({ '@type': 'WebSite', name: 'evil</script><script>alert(1)</script>' });
    expect(out).not.toContain('</script>');
    expect(out).toContain('<\\/script>');
  });
});
