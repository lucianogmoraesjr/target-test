SELECT 
    c.id, 
    c.company_name, 
    p.number
FROM 
    customers c
JOIN 
    phones p ON c.id = p.customer_id
WHERE 
    c.country_id = (SELECT id FROM countries WHERE code = 'SP');