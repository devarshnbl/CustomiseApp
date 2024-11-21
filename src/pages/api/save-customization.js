export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { productId, customizations } = req.body;

    // Here you would:
    // 1. Validate the data
    // 2. Save to Shopify metafields or your database
    // 3. Return success/failure

    // Example implementation using Shopify metafields
    const client = new Shopify.Clients.Rest(
      process.env.SHOP_NAME,
      process.env.SHOPIFY_ACCESS_TOKEN
    );

    await client.put({
      path: `products/${productId}/metafields`,
      data: {
        metafield: {
          namespace: "pocket_customizer",
          key: "configurations",
          value: JSON.stringify(customizations),
          type: "json",
        },
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error saving customization:", error);
    res.status(500).json({ error: "Failed to save customization" });
  }
}
